{
  type ErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type SuccessState = {
    result: "success";
  };

  type ResultState = SuccessState | ErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      return { result: "fail", reason: "timeout" };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    // 여기서 tryConnect() 에러처리를 한다고해도 UserService 레벨에서는 의미있게 에러를 처리할 수 없음
    login() {
      return this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}

    run() {
      const res = this.userService.login();
      if (res.result === "success") {
        // ...
      } else {
        // show dialog
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
