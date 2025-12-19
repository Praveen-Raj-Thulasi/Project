package com.growsense.model;

public class AuditResult {
    private String problem;
    private String explanation;
    private String suggestion;

    public AuditResult(String problem, String explanation, String suggestion) {
        this.problem = problem;
        this.explanation = explanation;
        this.suggestion = suggestion;
    }

    public String getProblem() { return problem; }
    public String getExplanation() { return explanation; }
    public String getSuggestion() { return suggestion; }
}
