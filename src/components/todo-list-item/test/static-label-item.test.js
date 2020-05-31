import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import StaticLabelItem from "../static-label-item.tsx";

describe("StaticLabelItem Component", () => {
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

  test("renders correct text content", () => {
    act(() => {
      render(<StaticLabelItem label="Hi" />, container);
    });
    expect(container.textContent).toBe("Hi");
  });

  test("matches snapshot", () => {
    act(() => {
      render(<StaticLabelItem label="Hi" important={true} />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<span class=\\"todo-list-item important\\"><span class=\\"todo-list-item-label\\">Hi</span><button type=\\"button\\" class=\\"btn btn-outline-success btn-sm float-right\\"><i class=\\"fa fa-exclamation\\"></i></button><button type=\\"button\\" class=\\"btn btn-outline-danger btn-sm float-right\\"><i class=\\"fa fa-trash-o\\"></i></button><button type=\\"button\\" class=\\"btn btn-outline-primary btn-sm float-right\\"><i class=\\"fa fa-pencil\\" aria-hidden=\\"true\\"></i></button></span>"`
    );
  });

  
});
