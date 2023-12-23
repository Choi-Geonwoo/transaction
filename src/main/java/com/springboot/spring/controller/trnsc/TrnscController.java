package com.springboot.spring.controller.trnsc;

import org.springframework.stereotype.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;


// 거래내역
@Slf4j
@Controller
public class TrnscController {
    
    @GetMapping("/")
    public String mainView(Model model) {
        model.addAttribute("title", "거래내역");
        return "view/trnsc/trnscView";
    }
    
}
