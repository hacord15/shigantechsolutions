// 'use client';

// import { useState } from 'react';

// export default function SavingsCalculator() {
//   const [distance, setDistance] = useState(4500);
//   const [dieselPrice, setDieselPrice] = useState(94);
//   const [cngPrice, setCngPrice] = useState(68);
//   const [dieselEff, setDieselEff] = useState(4.5);
//   const [cngEff, setCngEff] = useState(5.2);

//   const calculateSavings = () => {
//     const dist = parseFloat(distance) || 0;
//     const dPrice = parseFloat(dieselPrice) || 0;
//     const cPrice = parseFloat(cngPrice) || 0;
//     const dEff = parseFloat(dieselEff) || 1;
//     const cEff = parseFloat(cngEff) || 1;
//     if (dist <= 0) return { monthly: 0, annual: 0, perKm: 0 };
//     const dieselCost = (dist / dEff) * dPrice;
//     const cngCost = (dist / cEff) * cPrice;
//     const save = Math.max(0, dieselCost - cngCost);
//     return { monthly: save, annual: save * 12, perKm: save / dist };
//   };

//   const { monthly, annual, perKm } = calculateSavings();

//   return (
//     <section id="calculator" className="section">
//       <div className="container">
//         <h2>💰 Monthly Savings Estimator</h2>
//         <div className="calculator-card">
//           <div className="calc-input-group">
//             <div className="calc-field">
//               <label>📆 Monthly Distance (km)</label>
//               <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
//             </div>
//             <div className="calc-field">
//               <label>⛽ Diesel Price (₹/L)</label>
//               <input type="number" value={dieselPrice} onChange={(e) => setDieselPrice(e.target.value)} />
//             </div>
//             <div className="calc-field">
//               <label>💨 CNG Price (₹/kg)</label>
//               <input type="number" value={cngPrice} onChange={(e) => setCngPrice(e.target.value)} />
//             </div>
//             <div className="calc-field">
//               <label>📊 Diesel Eff (km/L)</label>
//               <input type="number" step="0.1" value={dieselEff} onChange={(e) => setDieselEff(e.target.value)} />
//             </div>
//             <div className="calc-field">
//               <label>🌱 CNG Eff (km/kg)</label>
//               <input type="number" step="0.1" value={cngEff} onChange={(e) => setCngEff(e.target.value)} />
//             </div>
//           </div>
//           <div className="savings-result">
//             <div className="result-block">
//               <span className="result-value">₹{Math.round(monthly)}</span>
//               <br />
//               Monthly Savings
//             </div>
//             <div className="result-block">
//               <span className="result-value">₹{Math.round(annual)}</span>
//               <br />
//               Annual Savings
//             </div>
//             <div className="result-block">
//               <span className="result-value">₹{perKm.toFixed(2)}</span>
//               <br />
//               Savings per km
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import styles from './SavingsCalculator.module.css';

export default function SavingsCalculator() {
  const [distance, setDistance]     = useState(4500);
  const [dieselPrice, setDieselPrice] = useState(94);
  const [cngPrice, setCngPrice]     = useState(68);
  const [dieselEff, setDieselEff]   = useState(4.5);
  const [cngEff, setCngEff]         = useState(5.2);
  const [results, setResults]       = useState({ monthly: 0, annual: 0, perKm: 0, dieselCost: 0, cngCost: 0 });

  useEffect(() => {
    const dist  = parseFloat(distance)    || 0;
    const dP    = parseFloat(dieselPrice) || 0;
    const cP    = parseFloat(cngPrice)    || 0;
    const dE    = parseFloat(dieselEff)   || 1;
    const cE    = parseFloat(cngEff)      || 1;

    const dieselCost = dist > 0 ? (dist / dE) * dP : 0;
    const cngCost    = dist > 0 ? (dist / cE) * cP : 0;
    const save       = Math.max(0, dieselCost - cngCost);

    setResults({
      monthly:    save,
      annual:     save * 12,
      perKm:      dist > 0 ? save / dist : 0,
      dieselCost,
      cngCost,
    });
  }, [distance, dieselPrice, cngPrice, dieselEff, cngEff]);

  const total      = results.dieselCost + results.cngCost;
  const dieselPct  = total > 0 ? (results.dieselCost / total) * 100 : 50;
  const cngPct     = total > 0 ? (results.cngCost    / total) * 100 : 50;
  const savingsPct = results.dieselCost > 0
    ? Math.round((results.monthly / results.dieselCost) * 100)
    : 0;

  const fmtINR = (n) =>
    '₹' + Math.round(n).toLocaleString('en-IN');

  const fields = [
    {
      id: 'distance',
      label: 'Monthly Distance',
      unit: 'km/month',
      value: distance,
      setter: setDistance,
      step: 1,
      iconClass: styles.iconBlue,
      iconText: 'km',
    },
    {
      id: 'dieselPrice',
      label: 'Diesel Price',
      unit: '₹/litre',
      value: dieselPrice,
      setter: setDieselPrice,
      step: 0.5,
      iconClass: styles.iconOrange,
      iconText: '⛽',
    },
    {
      id: 'cngPrice',
      label: 'CNG Price',
      unit: '₹/kg',
      value: cngPrice,
      setter: setCngPrice,
      step: 0.5,
      iconClass: styles.iconTeal,
      iconText: '💨',
    },
    {
      id: 'dieselEff',
      label: 'Diesel Efficiency',
      unit: 'km/L',
      value: dieselEff,
      setter: setDieselEff,
      step: 0.1,
      iconClass: styles.iconOrange,
      iconText: '⚡',
    },
    {
      id: 'cngEff',
      label: 'CNG Efficiency',
      unit: 'km/kg',
      value: cngEff,
      setter: setCngEff,
      step: 0.1,
      iconClass: styles.iconTeal,
      iconText: '🌱',
    },
  ];

  return (
    <section id="calculator" className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Fuel Cost Estimator</span>
          <h2 className={styles.title}>Monthly Savings Calculator</h2>
          <p className={styles.subtitle}>
            Compare diesel vs CNG running costs for your fleet
          </p>
        </div>

        {/* Card */}
        <div className={styles.card}>

          {/* Inputs */}
          <div className={styles.inputsPanel}>
            <p className={styles.inputsLabel}>Enter your parameters</p>
            <div className={styles.inputsGrid}>
              {fields.map(({ id, label, unit, value, setter, step, iconClass, iconText }) => (
                <div key={id} className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor={id}>
                    <span className={`${styles.fieldIcon} ${iconClass}`}>{iconText}</span>
                    {label}
                    <span className={styles.fieldUnit}>{unit}</span>
                  </label>
                  <input
                    id={id}
                    type="number"
                    step={step}
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    className={styles.input}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className={styles.resultsGrid}>
            <div className={`${styles.resultCard} ${styles.rcMonthly}`}>
              <span className={styles.rcIcon}>📅</span>
              <span className={styles.rcValue}>{fmtINR(results.monthly)}</span>
              <span className={styles.rcLabel}>Monthly Savings</span>
            </div>
            <div className={`${styles.resultCard} ${styles.rcAnnual}`}>
              <span className={styles.rcIcon}>📈</span>
              <span className={styles.rcValue}>{fmtINR(results.annual)}</span>
              <span className={styles.rcLabel}>Annual Savings</span>
            </div>
            <div className={`${styles.resultCard} ${styles.rcPerKm}`}>
              <span className={styles.rcIcon}>🛣️</span>
              <span className={styles.rcValue}>₹{results.perKm.toFixed(2)}</span>
              <span className={styles.rcLabel}>Saved per km</span>
            </div>
          </div>

          {/* Footer bar */}
          <div className={styles.footer}>
            <div className={styles.barWrap}>
              <div className={styles.barLabels}>
                <span className={styles.barLabelDiesel}>🟦 Diesel cost</span>
                <span className={styles.barLabelCng}>🟩 CNG cost</span>
              </div>
              <div className={styles.barTrack}>
                <div
                  className={styles.barDiesel}
                  style={{ width: `${dieselPct.toFixed(1)}%` }}
                />
                <div
                  className={styles.barCng}
                  style={{ width: `${cngPct.toFixed(1)}%` }}
                />
              </div>
            </div>
            <span className={styles.savePct}>~{savingsPct}% cheaper</span>
          </div>

        </div>
      </div>
    </section>
  );
}