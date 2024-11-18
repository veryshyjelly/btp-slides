"use client"
import React, { useState } from 'react';

const Presentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const x = "VaRₐ = inf{x ∈ ℝ : P(R ≤ x) ≥ α}";

    const slides = [
        // Title Slide
        <div key={1} className="flex flex-col items-center justify-center h-[30rem] mt-40 text-center p-12 bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
            <h1 className="text-4xl font-mono font-extrabold mb-6">
                A Genetic Algorithm for Portfolio Optimization
            </h1>
            <h2 className="text-xl font-semibold mt-20">Ayush Biswas</h2>
            <img src='logo-white.png' height={100} width={100} className='my-5' />
            <p className="text-lg">Department of Mathematics</p>
            <p className="text-lg">Indian Institute of Technology Kharagpur</p>
        </div>,

        // Introduction
        <div key={2} className="p-10 bg-gray-50 text-gray-800">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-purple-600 pb-2">
                Introduction
            </h2>
            <div className="grid md:grid-cols-2 gap-8 my-10 text-2xl">
                <div>
                    <h3 className="font-mono font-semibold mb-4">Traditional Challenges:</h3>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Mean-variance optimization limitations</li>
                        <li>Transaction costs erode returns</li>
                        <li>Minimum transaction lots create integer constraints</li>
                        <li>Non-smooth, non-convex optimization problem</li>
                    </ul>
                </div>
            </div>
        </div>,

        // Introduction
        <div key={3} className="p-10 bg-gray-50 text-gray-800">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-purple-600 pb-2">
                Introduction
            </h2>
            <div className="grid md:grid-cols-2 gap-8 my-10 text-2xl">
                <div>
                    <h3 className="font-mono font-semibold mb-4">Traditional Challenges:</h3>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Mean-variance optimization limitations</li>
                        <li>Transaction costs erode returns</li>
                        <li>Minimum transaction lots create integer constraints</li>
                        <li>Non-smooth, non-convex optimization problem</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-mono xl font-semibold mb-4">Research Objectives:</h3>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Develop GA-based optimization framework</li>
                        <li>Incorporate VaR and CVaR risk measures</li>
                        <li>Handle real-world trading constraints</li>
                        <li>Compare performance with traditional approaches</li>
                    </ul>
                </div>
            </div>
        </div>,

        // Preliminaries - Portfolio Representation
        <div key={4} className="p-10 bg-white text-gray-800">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-600 pb-2">
                Preliminaries: Portfolio Representation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 my-10 text-2xl">
                <div>
                    <h3 className="font-semibold font-mono mb-4">Portfolio Vector</h3>
                    <p className="mb-4">k = (k₁, k₂, ..., kₛ)</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>kⱼ: Number of shares for security j</li>
                        <li>Total capital C allocation</li>
                        <li>Subject to transaction constraints</li>
                    </ul>
                </div>
            </div>
        </div>,

        <div key={5} className="p-10 bg-white text-gray-800">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-600 pb-2">
                Preliminaries: Portfolio Representation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 my-10 text-2xl">
                <div>
                    <h3 className="font-semibold font-mono mb-4">Portfolio Vector</h3>
                    <p className="mb-4">k = (k₁, k₂, ..., kₛ)</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>kⱼ: Number of shares for security j</li>
                        <li>Total capital C allocation</li>
                        <li>Subject to transaction constraints</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold font-mono mb-4">Constraints</h3>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Investment limits: 0 ≤ kⱼ ≤ uⱼ</li>
                        <li>Capital constraint: Σ kⱼpⱼ = C</li>
                        <li>Minimum transaction lots</li>
                        <li>Transaction costs considerations</li>
                    </ul>
                </div>
            </div>
        </div>,

        // Preliminaries - Risk Measures
        <div key={6} className="p-10 bg-white text-gray-800">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-600 pb-2">
                Preliminaries: Risk Measures
            </h2>
            <div className="space-y-10 my-10 text-2xl">
                <div>
                    <h3 className="font-mono font-semibold mb-4">Value at Risk (VaR)</h3>
                    <p className="bg-gray-100 p-4 rounded mb-2">{x}</p>
                    <p>Maximum expected loss at confidence level α</p>
                </div>
                <div>
                    <h3 className="font-mono font-semibold mb-4">Conditional Value at Risk (CVaR)</h3>
                    <p className="bg-gray-100 p-4 rounded mb-2">CVaRₐ = 𝔼[R | R ≤ VaRₐ]</p>
                    <p>Expected loss exceeding VaR threshold</p>
                </div>
            </div>
        </div>,

        // Mathematical Framework
        <div key={7} className="p-10 bg-white text-gray-800">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-600 pb-2">
                Mathematical Framework
            </h2>
            <div className="space-y-6 my-10 text-2xl">
                <div>
                    <p className="font-mono font-semibold mb-2">Objective Function:</p>
                    <p className="bg-gray-100 p-4 rounded">min f(k) = λ(1 - R(k)) + (1 - λ)V(k)</p>
                </div>
                <div>
                    <p className="font-mono font-semibold mb-2">Components:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>λ: Risk-return trade-off parameter</li>
                        <li>R(k): Expected portfolio return</li>
                        <li>V(k): Risk measure (VaR or CVaR)</li>
                        <li>Transaction costs included in return calculation</li>
                    </ul>
                </div>
            </div>
        </div>,

        // GA Implementation Details
        <div key={8} className="p-10 bg-white text-gray-800">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-600 pb-2">
                Genetic Algorithm Implementation
            </h2>
            <div className="grid grid-cols-2 gap-6 my-10 text-2xl">
                <div>
                    <h3 className="fonot-mono font-semibold mb-4">Core Parameters</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Population Size: 400</li>
                        <li>Generations: 500</li>
                        <li>Crossover Rate: 0.95</li>
                        <li>Mutation Rate: 0.15</li>
                        <li>Risk-Return Trade-off (λ): 0.5</li>
                    </ul>
                </div>
            </div>
        </div>,

        // GA Implementation Details
        <div key={9} className="p-10 bg-white text-gray-800">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-600 pb-2">
                Genetic Algorithm Implementation
            </h2>
            <div className="grid grid-cols-2 gap-6 my-10 text-2xl">
                <div>
                    <h3 className="fonot-mono font-semibold mb-4">Core Parameters</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Population Size: 400</li>
                        <li>Generations: 500</li>
                        <li>Crossover Rate: 0.95</li>
                        <li>Mutation Rate: 0.15</li>
                        <li>Risk-Return Trade-off (λ): 0.5</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-mono font-semibold mb-4">Genetic Operators</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>SBX Crossover</li>
                        <li>Polynomial Mutation</li>
                        <li>Binary Tournament Selection</li>
                        <li>Elitism Preservation</li>
                    </ul>
                </div>
            </div>
        </div>,

        // Implementation Process
        <div key={10} className="p-10 bg-white text-gray-800">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-600 pb-2">
                Implementation Process
            </h2>
            <div className="space-y-6 text-2xl my-10">
                <div>
                    <h3 className="text-2xl font-mono font-semibold mb-4">Data Preparation</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Historical price data for 64 securities</li>
                        <li>Market returns from Sensex</li>
                        <li>1% uniform transaction costs</li>
                        <li>Capital range: $50,000 - $5,000,000</li>
                    </ul>
                </div>
            </div>
        </div>,

        // Implementation Process
        <div key={11} className="p-10 bg-white text-gray-800">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-600 pb-2">
                Implementation Process
            </h2>
            <div className="space-y-6 text-2xl my-10">
                <div>
                    <h3 className="text-2xl font-mono font-semibold mb-4">Data Preparation</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Historical price data for 64 securities</li>
                        <li>Market returns from Sensex</li>
                        <li>1% uniform transaction costs</li>
                        <li>Capital range: $50,000 - $5,000,000</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-mono font-semibold mb-4">Algorithm Flow</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Initialize feasible population</li>
                        <li>Evaluate fitness (return-risk trade-off)</li>
                        <li>Apply genetic operators</li>
                        <li>Repair infeasible solutions</li>
                        <li>Update population</li>
                    </ul>
                </div>
            </div>
        </div>,

        // Results - Performance Metrics
        <div key={12} className="p-10 bg-white text-gray-800">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-600 pb-2">
                Results: Performance Metrics
            </h2>
            <div className="overflow-x-auto text-xl">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-400">
                            <th className="border p-2">Portfolio Type</th>
                            <th className="border p-2">Sharpe</th>
                            <th className="border p-2">Sortino</th>
                            <th className="border p-2">Beta</th>
                            <th className="border p-2">Max Drawdown</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">VaR (Historical)</td>
                            <td className="border p-2">1.25</td>
                            <td className="border p-2">1.50</td>
                            <td className="border p-2">0.85</td>
                            <td className="border p-2">-15.2%</td>
                        </tr>
                        <tr>
                            <td className="border p-2">CVaR (Historical)</td>
                            <td className="border p-2">1.40</td>
                            <td className="border p-2">1.80</td>
                            <td className="border p-2">0.78</td>
                            <td className="border p-2">-12.5%</td>
                        </tr>
                        <tr>
                            <td className="border p-2">CVaR (Var-Covar)</td>
                            <td className="border p-2">1.45</td>
                            <td className="border p-2">1.90</td>
                            <td className="border p-2">0.75</td>
                            <td className="border p-2">-11.8%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>,

        // Results Analysis
        <div key={13} className="p-10 bg-white text-gray-800">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-600 pb-2">
                Results Analysis
            </h2>
            <div className="space-y-6 text-2xl">
                <div>
                    <h3 className="text-2xl font-mono font-semibold mb-4">Key Findings</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>CVaR optimization outperformed VaR across metrics</li>
                        <li>Variance-Covariance method showed improved efficiency</li>
                        <li>Successful handling of transaction constraints</li>
                        <li>Robust convergence within 500 generations</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-mono font-semibold mb-4">Risk Management</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Lower maximum drawdowns with CVaR</li>
                        <li>Better tail risk management</li>
                        <li>Improved risk-adjusted returns</li>
                    </ul>
                </div>
            </div>
        </div>,

        // Conclusion
        <div key={14} className="p-10 bg-white text-gray-800">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-600 pb-2">
                Conclusion
            </h2>
            <div className="space-y-6 text-2xl">
                <div>
                    <p className="font-mono font-semibold mb-2">Key Contributions:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Enhanced optimization framework with VaR/CVaR</li>
                        <li>Effective handling of real-world constraints</li>
                        <li>Superior risk-adjusted performance</li>
                        <li>Comprehensive evaluation framework</li>
                    </ul>
                </div>
                <div>
                    <p className="font-mono font-semibold mb-2">Future Work:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Advanced genetic operators</li>
                        <li>Dynamic optimization capabilities</li>
                        <li>Additional real-world constraints</li>
                        <li>Multi-period optimization</li>
                    </ul>
                </div>
            </div>
        </div>
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <div className="flex-1 relative overflow-hidden">
                <div
                    className="transition-transform duration-0 transform"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full h-full absolute"
                            style={{ left: `${index * 100}%` }}
                        >
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg">
                <button
                    onClick={prevSlide}
                    className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-600 transition"
                    disabled={currentSlide === 0}
                >
                    Previous
                </button>
                <span className="text-lg font-medium">
                    Slide {currentSlide + 1} / {slides.length}
                </span>
                <button
                    onClick={nextSlide}
                    className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-600 transition"
                    disabled={currentSlide === slides.length - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Presentation;