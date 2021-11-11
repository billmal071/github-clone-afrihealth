export type ProfileType = {
  avatarUrl: string;
  bio: string;
  email: string;
  topRepositories: {
    totalCount: number;
  };
  followers: { totalCount: number };
  following: { totalCount: number };
  starredRepositories: { totalCount: number };
  name: string;
  organizations: {
    nodes: Array<{
      avatarUrl: string;
    }>;
    totalCount: number;
  };
  repositories: {
    nodes: Array<{
      name: string;
      description: string;
      primaryLanguage: {
        name: string;
        color: string;
      };
    }>;
    totalCount: number;
  };
  repositoriesContributedTo: { totalCount: number };
  status: null;
  contributionsCollection: {
    totalCommitContributions: number;
    contributionCalendar: {
      totalContributions: number;
      colors: Array<string>;
      weeks: Array<{
        contributionDays: Array<{
          color: string;
          date: string;
          weekDay: number;
          countributionCount: number;
          countributionLevel: string;
        }>;
      }>;
      months: Array<{
        name: string;
      }>;
    };
    contributionYears: Array<number>;
  };
};

export type State = {
  loading: boolean;
  error: null;
  profile: ProfileType;
};

export type Action = {
  type: any;
  payload: any;
};

export type Methods = {
  getProfile: () => Promise<any>;
};

export type PropType = {
  children: any;
};

export type ContextType = State & Methods;

export type LinksType = {
  imgSrc?: string;
  imgAlt?: string;
  iconName?: string;
  linkText: string;
};

export type ErrorProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export type TabProps = {
  iconName: string;
  text: string;
  num?: number;
};