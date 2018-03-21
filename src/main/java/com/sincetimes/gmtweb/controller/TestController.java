package com.sincetimes.gmtweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.Map;

@Controller
public class TestController {
    @RequestMapping(value = "/test")
    public String index() {
        Map<String, String> map = new HashMap<>();
        map.put("", "");
        System.out.println("test!");
        return "test";
    }
}
