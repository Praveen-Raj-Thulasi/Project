package com.growsense.service;

import com.growsense.model.AuditResult;
import org.springframework.stereotype.Service;

@Service
public class GrowthService {

    public AuditResult runAudit() {
        return new AuditResult(
            "Low Conversion Rate",
            "Users are visiting but not signing up due to unclear value messaging.",
            "Test a clearer headline and free-trial CTA."
        );
    }
}
