import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import ChangingLabelItem from "../changing-label-item.tsx";

describe("ChangingLabelItem Component", () => {
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
      render(<ChangingLabelItem label="Hi" />, container);
    });
    const input = document.querySelector(".form-control.label-change-input")
    expect(input.value).toBe("Hi");
  });

  test("matches snapshot", () => {
    act(() => {
      render(<ChangingLabelItem label="Hi" />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<form class=\\"bottom-panel d-flex label-change-form\\"><input class=\\"form-control label-change-input\\" value=\\"Hi\\"><button type=\\"submit\\" class=\\"btn btn-outline-secondary label-change-submit\\">Save</button></form>"`
    );
  });
});
