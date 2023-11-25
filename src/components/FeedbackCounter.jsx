import PropTypes from "prop-types";
import React, { Component } from "react";

class FeedbackCounter extends Component {
  constructor(props) {
    super(props);

    // Inicjalizacja stanu
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  // Funkcja do aktualizacji stanu po kliknięciu przycisku
  handleButtonClick = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    if (total === 0) {
      return 0;
    }
    return Math.floor((good / total) * 100);
  };

  render() {
    return (
      <div>
        <h2>Feedback Counter</h2>
        <div>
          <button onClick={() => this.handleButtonClick("good")}>Good</button>
          <button onClick={() => this.handleButtonClick("neutral")}>
            Neutral
          </button>
          <button onClick={() => this.handleButtonClick("bad")}>Bad</button>
        </div>
        <div>
          {this.countTotalFeedback() === 0 ? (
            <p>No feedback given</p>
          ) : (
            <>
              <p>Good: {this.state.good}</p>
              <p>Neutral: {this.state.neutral}</p>
              <p>Bad: {this.state.bad}</p>
              <p>total: {this.countTotalFeedback()}</p>
              <p>
                Positive feedback:{this.countPositiveFeedbackPercentage()} %
              </p>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default FeedbackCounter;
