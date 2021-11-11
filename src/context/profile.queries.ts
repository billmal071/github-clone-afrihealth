// graphql queries for github profile
export const USER = /* graphql */
`query user($name: String!) {
  user(login: $name) {
    avatarUrl
    bio
    topRepositories(orderBy: {field: CREATED_AT, direction: ASC}) {
      totalCount
    }
    email
    followers(first: 5) {
      totalCount
    }
    following(first: 5) {
      totalCount
    }
    starredRepositories {
    	totalCount
    }
    name
    organizations(first: 10) {
      totalCount
      nodes {
        avatarUrl
        name
      }
    }
    repositories(first: 6, orderBy: {field: CREATED_AT, direction: ASC}, ownerAffiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]) {
      totalCount
      nodes {
        description
        name
        primaryLanguage {
          name
          color
        }
      }
    }
    repositoriesContributedTo(orderBy: {field: CREATED_AT, direction: ASC}) {
      totalCount
    }
    status {
      createdAt
    }
    contributionsCollection {
      totalCommitContributions
      contributionYears
      contributionCalendar {
        colors
        totalContributions
        weeks {
          contributionDays {
            color
            date
            weekday
            contributionCount
            contributionLevel
          }
        }
        months {
          name
        }
      }
    }
  }
}
`