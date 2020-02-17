import { createBrowserHistory } from "history";
import { useEffect, useState } from "react";

let _history = createBrowserHistory();

export function useHistory() {
  const [history, setHistory] = useState(_history);

  return {
    history,
    setHistory
  };
}

// export default _history as history;
export { _history as history };
