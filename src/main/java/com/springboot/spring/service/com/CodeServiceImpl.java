package com.springboot.spring.service.com;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.spring.mapper.com.CodeMapper;
import com.springboot.spring.util.Conversion;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CodeServiceImpl implements CodeService {

    @Autowired
    private CodeMapper codeMapper;

    @Override
    public String sectionInsert(String jsonData) {
        log.info("호출 : CodeServiceImpl.sectionInsert ");
        String result = "true";
        try {
            Map map = Conversion.stringToMap(jsonData);
            int cnt = codeMapper.sectionInsert(map);
            //log.info("결과 : " + map.toString());
            if(0 == cnt){
                result = "false";
            }
        } catch (Exception e) {
                result = "false";
            throw new UnsupportedOperationException("Unimplemented method 'sectionInsert'");
        }
        return result;
    }

    @Override
    public List<Map> sectionSelect(Map map) {
        log.info("호출 : CodeServiceImpl.sectionSelect ");
        List<Map> resultList = new ArrayList<>();
        try {
            resultList = codeMapper.sectionSelect();
        } catch (Exception e) {
            resultList = null;
            log.error("error ", e.toString());
            throw new UnsupportedOperationException("Unimplemented method 'sectionSelect'");
        }
        return resultList;
    }

    @Override
    public String sectionUpdate(String jsonData) {
        log.info("호출 : CodeServiceImpl.sectionUpdate ");
        String result = "true";
        try {
            Map map = Conversion.stringToMap(jsonData);
            int cnt = codeMapper.sectionUpdate(map);
            //log.info("결과 : " + map.toString());
            if(0 == cnt){
                result = "false";
            }
        } catch (Exception e) {
                result = "false";
            throw new UnsupportedOperationException("Unimplemented method 'sectionUpdate'");
        }
        return result;
    }
}
