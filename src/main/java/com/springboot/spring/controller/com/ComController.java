package com.springboot.spring.controller.com;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.springboot.spring.service.com.CodeService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class ComController {

    @Autowired
    private CodeService codeService;

    @GetMapping("/com/comView")
    public String comView(Model model) {
        log.info("호출 : ComController.comView");
        model.addAttribute("title", "공통코드");
        List<Map> list = codeService.sectionSelect(null);
        model.addAttribute("list", list);
        return "view/com/comView";
    }

    
    @GetMapping("/com/comView2")
    public String comView2(Model model) {
        log.info("호출 : ComController.comView");
        model.addAttribute("title", "공통코드");
        List<Map> list = codeService.sectionSelect(null);
        model.addAttribute("list", list);
        return "view/com/comView2";
    }

    @PostMapping("/com/sectionInsert")
    @ResponseBody
    public String sectionInsert(Model model, @RequestBody String jsonData) {
        log.info("호출 : ComController.sectionInsert");
        log.info("toString : {}" ,jsonData );
        String result = codeService.sectionInsert(jsonData);
        //map.put("result", "true");
        //map.put("cnt", codeService.sectionInsert(jsonData));
        //model.addAttribute("list", "aaaaa");
        //int cnt = codeService.sectionInsert(paramMap);
        return result;
    }

    @PostMapping("/com/sectionUpdate")
    @ResponseBody
    public String sectionUpdate(Model model, @RequestBody String jsonData) {
        log.info("호출 : ComController.sectionUpdate");
        log.info("toString : {}" ,jsonData );
        
        String result = codeService.sectionUpdate(jsonData);
        //map.put("result", "true");
        //map.put("cnt", codeService.sectionInsert(jsonData));
        //model.addAttribute("list", "aaaaa");
        //int cnt = codeService.sectionInsert(paramMap);
        return result;
    }
    
    @PostMapping("/com/clsfInsert")
    @ResponseBody
    public String clsfInsert(Model model, @RequestBody String jsonData) {
        log.info("호출 : ComController.clsfInsert");
        log.info("toString : {}" ,jsonData );
        String result = codeService.clsfInsert(jsonData);
        return result;
    }
    
    @GetMapping("/com/clsfSelect")
    public ResponseEntity<List<Map>>  clsfSelect(Model model,@RequestParam("SECTION_CD")  String param1) {
        log.info("호출 : ComController.clsfSelect");
        log.info("toString : {}" ,param1 );
        List<Map> list = codeService.clsfSelect(param1);
        log.info("return list : {}" ,list.toString() );
        
        return ResponseEntity.ok(list);
    }
}
