/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const handler = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

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
          <button type="button" onClick={handler} className="gray">AC</button>
          <button type="button" onClick={handler} className="gray">+/-</button>
          <button type="button" onClick={handler} className="gray">%</button>
          <button type="button" onClick={handler} className="orange">÷</button>
          <button type="button" onClick={handler} className="gray">7</button>
          <button type="button" onClick={handler} className="gray">8</button>
          <button type="button" onClick={handler} className="gray">9</button>
          <button type="button" onClick={handler} className="orange">x</button>
          <button type="button" onClick={handler} className="gray">4</button>
          <button type="button" onClick={handler} className="gray">5</button>
          <button type="button" onClick={handler} className="gray">6</button>
          <button type="button" onClick={handler} className="orange">-</button>
          <button type="button" onClick={handler} className="gray">1</button>
          <button type="button" onClick={handler} className="gray">2</button>
          <button type="button" onClick={handler} className="gray">3</button>
          <button type="button" onClick={handler} className="orange">+</button>
          <button type="button" onClick={handler} className="gray" id="zero">0</button>
          <button type="button" onClick={handler} className="gray">.</button>
          <button type="button" onClick={handler} className="orange">=</button>
        </div>
      </div>
    </section>
  );
}
