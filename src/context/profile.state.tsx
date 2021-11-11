import { createContext, useReducer } from "react";
import { ContextType, PropType, State } from "../interfaces/commonTypes";
import { fetcher } from "../utils";
import { USER } from "./profile.queries";
import ProfileReducer from "./profile.reducer";
import { profileTypes } from "./profile.types";

export const ProfileContext = createContext<ContextType>({
  error: null,
  loading: false,
  profile: {
    avatarUrl: "",
    bio: "",
    email: "",
    topRepositories: {
      totalCount: 0,
    },
    followers: {
      totalCount: 0,
    },
    following: {
      totalCount: 0,
    },
    starredRepositories: {
      totalCount: 0,
    },
    name: "",
    status: null,
    organizations: {
      totalCount: 0,
      nodes: [],
    },
    contributionsCollection: {
      totalCommitContributions: 0,
      contributionCalendar: {
        colors: [],
        weeks: [],
        months: [],
        totalContributions: 0,
      },
      contributionYears: [],
    },
    repositories: {
      totalCount: 0,
      nodes: [],
    },
    repositoriesContributedTo: {
      totalCount: 0,
    },
  },
  getProfile: async () => null,
});

function ProfileState({ children }: PropType) {
  const initialState: State = {
    profile: {
      avatarUrl: "",
      bio: "",
      email: "",
      topRepositories: {
        totalCount: 0,
      },
      followers: {
        totalCount: 0,
      },
      following: {
        totalCount: 0,
      },
      starredRepositories: {
        totalCount: 0,
      },
      name: "",
      status: null,
      organizations: {
        totalCount: 0,
        nodes: [],
      },
      contributionsCollection: {
        totalCommitContributions: 0,
        contributionCalendar: {
          colors: [],
          weeks: [],
          months: [],
          totalContributions: 0,
        },
        contributionYears: [],
      },
      repositories: {
        totalCount: 0,
        nodes: [],
      },
      repositoriesContributedTo: {
        totalCount: 0,
      },
    },
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  // methods
  const getProfile = async () => {
    try {
      setLoading();
      const response = await fetcher(USER, { name: "billmal071" });
      console.log(response);
      dispatch({ type: profileTypes.PROFILE, payload: response.user });
    } catch (e: any) {
      dispatch({ type: profileTypes.ERROR, payload: e.message });
    }
  };

  const setLoading = () => {
    dispatch({ type: profileTypes.LOADING, payload: true });
  };

  return (
    <ProfileContext.Provider
      value={{
        error: state.error,
        loading: state.loading,
        profile: state.profile,
        getProfile: getProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileState;
