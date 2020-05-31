import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import TodoListItem from "../todo-list-item.tsx";
import ChangingLabelItem from "../changing-label-item.tsx";

describe("TodoListItem Component", () => {
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
      render(<TodoListItem label="Hi" />, container);
    });
    expect(container.textContent).toBe("Hi");
  });

  test("matches snapshot", () => {
    act(() => {
      render(
        <TodoListItem label="Hi" important={true} done={true} />,
        container
      );
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<span class=\\"todo-list-item important done\\"><span class=\\"todo-list-item-label\\">Hi</span><button type=\\"button\\" class=\\"btn btn-outline-success btn-sm float-right\\"><i class=\\"fa fa-exclamation\\"></i></button><button type=\\"button\\" class=\\"btn btn-outline-danger btn-sm float-right\\"><i class=\\"fa fa-trash-o\\"></i></button><button type=\\"button\\" class=\\"btn btn-outline-primary btn-sm float-right\\"><i class=\\"fa fa-pencil\\" aria-hidden=\\"true\\"></i></button></span>"`
    );
  });

  test("To changing label item when clicked", () => {
    act(() => {
      render(<TodoListItem label={"Hi"} />, container);
    });

    // получаем элемент button и кликаем на него несколько раз
    const changeLabelButton = document.querySelector(
      ".btn.btn-outline-primary"
    );
    act(() => {
      changeLabelButton.dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      );
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<form class=\\"bottom-panel d-flex label-change-form\\"><input class=\\"form-control label-change-input\\" value=\\"Hi\\"><button type=\\"submit\\" class=\\"btn btn-outline-secondary label-change-submit\\">Save</button></form>"`
    );
  });

});
