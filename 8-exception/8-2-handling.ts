{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new OfflineError("no network");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    // 여기서 tryConnect() 에러처리를 한다고해도 UserService 레벨에서는 의미있게 에러를 처리할 수 없음
    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}

    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
