import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section";
import Notification from "./components/Notification";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";

export class App extends Component {
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
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback given"></Notification>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}
