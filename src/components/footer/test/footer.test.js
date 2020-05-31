import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import { Footer } from "../footer.tsx";

describe("Footer Component", () => {
  let container = null;
  beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("renders correct content", () => {
    act(() => {
      render(<Footer />, container);
    });
    expect(container.textContent).toBe("All right reserved.");
  });

  test("renders correct classname", () => {
    act(() => {
      render(<Footer />, container);
    });
    expect(container.firstChild.className).toBe("footer");
  });

  test("matches snapshot", () => {
    act(() => {
      render(<Footer />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<div class=\\"footer\\">All right reserved.</div>"`
    );
  });
});
