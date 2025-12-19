package com.growsense.controller;

import com.growsense.model.AuditResult;
import com.growsense.service.GrowthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class GrowthController {

    private final GrowthService service;

    public GrowthController(GrowthService service) {
        this.service = service;
    }

    @GetMapping("/audit")
    public AuditResult getAudit() {
        return service.runAudit();
    }
}
