import { EnumGitOrganizationType } from "../../src/git/git.types";
import { GithubFile } from "../../src/git/dto/github-file.dto";
import { RemoteGitOrganization } from "../../src/git/dto/remote-git-organization.dto";
import {
  RemoteGitRepos,
  RemoteGitRepository,
} from "../../src/git/dto/remote-git-repository";

export const INSTALLATION_URL = "ExampleInstallationUrl";

export const PR_HTML_URL = "ExamplePrHtmlUrl";

export const GIT_HUB_FILE: GithubFile = {
  name: "exampleGithubFileName",
  path: "examplePath",
  content: "exampleContent",
  htmlUrl: "exampleHtmlUrl",
};

export const TEST_GIT_REMOTE_ORGANIZATION: RemoteGitOrganization = {
  name: "testGitRemoteOrganization",
  type: EnumGitOrganizationType.Organization,
};

export const TEST_GIT_REPOS: RemoteGitRepos = {
  repos: [
    {
      admin: true,
      fullName: "tupe12334/ofek",
      name: "ofek",
      private: true,
      url: "http://localhost/ofek",
      defaultBranch: "main",
    },
    {
      admin: false,
      fullName: "tupe12334/test",
      name: "test",
      private: true,
      url: "http://localhost/test",
      defaultBranch: "main",
    },
  ],
  totalRepos: 2,
  pageSize: 2,
  currentPage: 1,
};

export const TEST_GIT_REPO: RemoteGitRepository = {
  admin: true,
  fullName: "tupe12334/repo",
  name: "repo",
  private: false,
  url: "localhost/repo",
  defaultBranch: "main",
};
