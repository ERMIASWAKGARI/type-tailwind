class Calculator {
  private display: HTMLDivElement | null;
  private buttons: NodeListOf<HTMLButtonElement> | undefined;
  private currentOperand: string;
  private previousOperand: string;
  private operation: string | undefined;

  constructor() {
    this.display = document.querySelector(".col-span-3");
    this.buttons = document.querySelectorAll("button");
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    if (this.buttons) {
      this.buttons.forEach((button) => {
        button.addEventListener("click", () => {
          this.handleButtonClick(button.innerText);
        });
      });
    }
  }

  private handleButtonClick(value: string): void {
    if (value === "AC") {
      this.clear();
      this.updateDisplay();
      return;
    }

    if (value === "=") {
      this.compute();
      this.updateDisplay();
      return;
    }

    if (value === "." && this.currentOperand.includes(".")) {
      return;
    }

    if (
      this.isOperation(value) ||
      (value === "-" && this.currentOperand === "")
    ) {
      if (value === "-" && this.currentOperand === "") {
        this.currentOperand += value;
      } else {
        if (this.currentOperand === "") return;
        if (this.previousOperand !== "") {
          this.compute();
        }
        this.operation = value;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
      }
      this.updateDisplay();
      return;
    }

    this.currentOperand += value;
    this.updateDisplay();
  }

  private clear(): void {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  private compute(): void {
    let computation: number;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }

    this.currentOperand = computation.toString();
    this.operation = undefined;
    this.previousOperand = "";
  }

  private isOperation(value: string): boolean {
    return ["+", "-", "*", "/"].includes(value);
  }

  private updateDisplay(): void {
    if (this.display) {
      let equation = "";
      if (this.previousOperand !== "") {
        equation += `${this.previousOperand} ${this.operation} `;
      }
      equation += this.currentOperand;
      this.display.innerText = equation;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Calculator();
});
