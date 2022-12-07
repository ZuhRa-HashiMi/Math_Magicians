/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  return (
    <section className="layout">
      <h2>Lets do some math!</h2>
      <div className="skeleton">
        <div className="screen" role="none">
          {state.total}
          {state.operation}
          {state.next}
        </div>
        <div className="keyboard">
          <button type="button" className="gray">AC</button>
          <button type="button" className="gray">+/-</button>
          <button type="button" className="gray">%</button>
          <button type="button" className="orange">÷</button>
          <button type="button" className="gray">7</button>
          <button type="button" className="gray">8</button>
          <button type="button" className="gray">9</button>
          <button type="button" className="orange">x</button>
          <button type="button" className="gray">4</button>
          <button type="button" className="gray">5</button>
          <button type="button" className="gray">6</button>
          <button type="button" className="orange">-</button>
          <button type="button" className="gray">1</button>
          <button type="button" className="gray">2</button>
          <button type="button" className="gray">3</button>
          <button type="button" className="orange">+</button>
          <button type="button" className="gray" id="zero">0</button>
          <button type="button" className="gray">.</button>
          <button type="button" className="orange">=</button>
        </div>
      </div>
    </section>
  );
}
