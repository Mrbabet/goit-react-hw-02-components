import React, { useState } from "react";
import Section from "./Section";
import Notification from "./Notification";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";

const Feedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleButtonClick = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = feedback;
    const total = countTotalFeedback();

    if (total === 0) {
      return 0;
    }
    return Math.floor((good / total) * 100);
  };
  const totalFeedback = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleButtonClick}
        />
      </Section>
      {totalFeedback === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
};

export default Feedback;
