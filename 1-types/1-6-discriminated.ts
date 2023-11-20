{
  type SuccessState = {
    result: "success"; // 공통된 속성을 준다.
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail"; // 공통된 속성을 준다.
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // faile -> 😭 reason
  function pringLoginState(state: LoginState) {
    // 1-5 보다 더 직관적인 코드!!!
    if (state.result === "success") {
      console.log(`🎉 ${state.response}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
