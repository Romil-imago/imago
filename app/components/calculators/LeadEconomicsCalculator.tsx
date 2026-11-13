"use client";

import { useState } from "react";

function currency(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}
function count(value: number): string {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
}

export function LeadEconomicsCalculator() {
  const [budget, setBudget] = useState(5000);
  const [costPerLead, setCostPerLead] = useState(65);
  const [contactRate, setContactRate] = useState(70);
  const [bookingRate, setBookingRate] = useState(45);
  const [closeRate, setCloseRate] = useState(25);
  const [jobValue, setJobValue] = useState(12000);
  const [grossMargin, setGrossMargin] = useState(35);

  const leads = costPerLead > 0 ? budget / costPerLead : 0;
  const contacts = leads * contactRate / 100;
  const appointments = contacts * bookingRate / 100;
  const jobs = appointments * closeRate / 100;
  const revenue = jobs * jobValue;
  const grossProfit = revenue * grossMargin / 100;
  const afterMedia = grossProfit - budget;
  const acquisitionCost = jobs > 0 ? budget / jobs : null;

  return (
    <section className="dashboard-card calculator-card" aria-labelledby="lead-economics-title">
      <div className="card-heading">
        <div><p className="eyebrow">04 / UNIT ECONOMICS</p><h2 id="lead-economics-title">Lead economics model</h2></div>
        <span>Editable scenario</span>
      </div>
      <p className="calculator-intro">Stress-test the assumptions behind a contractor campaign before proposing a budget.</p>
      <div className="calculator-layout">
        <div className="calculator-inputs">
          <label>Monthly media budget ($)<input type="number" min="0" max="1000000" step="100" value={budget} onChange={e => setBudget(Math.max(0, Number(e.target.value) || 0))} /></label>
          <label>Cost per lead ($)<input type="number" min="0" max="100000" step="1" value={costPerLead} onChange={e => setCostPerLead(Math.max(0, Number(e.target.value) || 0))} /></label>
          <label>Lead contact rate (%)<input type="number" min="0" max="100" step="1" value={contactRate} onChange={e => setContactRate(Math.min(100, Math.max(0, Number(e.target.value) || 0)))} /></label>
          <label>Contact → appointment (%)<input type="number" min="0" max="100" step="1" value={bookingRate} onChange={e => setBookingRate(Math.min(100, Math.max(0, Number(e.target.value) || 0)))} /></label>
          <label>Appointment close rate (%)<input type="number" min="0" max="100" step="1" value={closeRate} onChange={e => setCloseRate(Math.min(100, Math.max(0, Number(e.target.value) || 0)))} /></label>
          <label>Average job value ($)<input type="number" min="0" max="10000000" step="500" value={jobValue} onChange={e => setJobValue(Math.max(0, Number(e.target.value) || 0))} /></label>
          <label>Gross profit margin (%)<input type="number" min="0" max="100" step="1" value={grossMargin} onChange={e => setGrossMargin(Math.min(100, Math.max(0, Number(e.target.value) || 0)))} /></label>
        </div>
        <div className="calculator-results">
          <div className="scenario-stat"><span>Estimated leads</span><strong>{count(leads)}</strong></div>
          <div className="scenario-stat"><span>Estimated appointments</span><strong>{count(appointments)}</strong></div>
          <div className="scenario-stat"><span>Estimated jobs won</span><strong>{count(jobs)}</strong></div>
          <div className="scenario-stat"><span>Modelled revenue</span><strong>{currency(revenue)}</strong></div>
          <div className="scenario-stat"><span>Gross profit before media</span><strong>{currency(grossProfit)}</strong></div>
          <div className="scenario-stat scenario-highlight"><span>Gross profit after media only</span><strong>{currency(afterMedia)}</strong></div>
          <div className="scenario-stat"><span>Media cost per won job</span><strong>{acquisitionCost === null ? "—" : currency(acquisitionCost)}</strong></div>
        </div>
      </div>
      <p className="calculator-disclaimer">Scenario model only—not a forecast, quote or guarantee. Excludes agency fees, sales payroll, overhead, taxes, refunds and delivery constraints. Replace every assumption with verified client data before making a recommendation.</p>
    </section>
  );
}
