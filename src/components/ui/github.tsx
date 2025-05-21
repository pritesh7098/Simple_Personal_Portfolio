"use client";
import { useCallback, useEffect, useState } from "react";

import { Activity, ActivityCalendar } from "react-activity-calendar";

type GithubGraphProps = {
  username: string;
  blockMargin?: number;
  colorPallete?: string[];
};

export const GithubGraph = ({
  username,
  blockMargin,
  colorPallete,
}: GithubGraphProps) => {
  const [contribution, setContribution] = useState<Activity[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const contributions = await fetchContributionData(username);
      setContribution(contributions);
      setError(null);
    } catch (error) {
      // Store the error message in state instead of throwing
      setError(`Error fetching contribution data: ${error}`);
      setContribution([]);
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const label = {
    totalCount: `{{count}} contributions in the last year`,
  };

  // Show error message if there's an error
  if (error && !loading) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <ActivityCalendar
        data={contribution}
        maxLevel={4}
        blockMargin={blockMargin ?? 2}
        loading={loading}
        labels={label}
        theme={{
          dark: colorPallete ?? [
            "#ebedf0",
            "#9be9a8",
            "#40c463",
            "#30a14e",
            "#216e39",
          ],
        }}
      />
    </>
  );
};

async function fetchContributionData(username: string): Promise<Activity[]> {
  const response = await fetch(`https://github.vineet.tech/api/${username}`);
  
  if (!response.ok) {
    throw new Error("Error fetching contribution data");
  }
  
  const responseBody = await response.json();
  return responseBody.data;
}