package com.springboot.spring.controller.com;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class ComController {

    @GetMapping("/com/comView")
    public String comView(Model model) {
        model.addAttribute("title", "공통코드");
        return "view/com/comView";
    }
}
