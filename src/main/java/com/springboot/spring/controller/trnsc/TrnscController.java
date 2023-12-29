package com.springboot.spring.controller.trnsc;

import org.springframework.stereotype.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;


// �ŷ�����
@Slf4j
@Controller
public class TrnscController {
    
    @GetMapping("/")
    public String mainView(Model model) {
        log.debug("���� ������ ȣ��");
        model.addAttribute("title", "�ŷ�����");
        return "view/trnsc/trnscView";
    }
    
}
