interface refreshData {
  accessToken: string;
  status: string;
  token: string;
  err: string;
}

interface signupData {
  status: string;
  user: {
    id: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  }
  message: string;
}

interface loginData {
  status: string;
  token: string;
  err: string;
}

interface event {
  id: string,
  title: string,
  subTitle: string,
  description: string,
  location: string,
  date: string,
  startTime: string,
  endTime: string,
  ngo: string,
}

interface eventsData {
  status: string;
  events: Array<event>;
  results: number;
}

interface blog {
  id: string,
  title: string,
  subTitle: string,
  description: string,
  author: string,
  date: string,
}

interface blogsData {
  status: string;
  blogs: Array<blog>;
  results: number;
}

export type { refreshData, signupData, loginData, eventsData, event, blogsData, blog };
