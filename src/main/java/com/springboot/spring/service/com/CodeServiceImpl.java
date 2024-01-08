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

    // 데이터 등록
    @Override
    public String clsfInsert(String jsonData) {
        log.info("호출 : CodeServiceImpl.clsfInsert ");
        String result = "true";
        int cnt = 0;
        try {
            List<Map<Object, Object>> listMap = Conversion.mapList(jsonData);
            for (Map<Object,Object> map : listMap) {
                log.info("toString  " + map.toString());
               cnt += codeMapper.clsfInsert(map);
            }
            if(0 == cnt){
                result = "false";
            }
        } catch (Exception e) {
                result = "false";
            throw new UnsupportedOperationException("Unimplemented method 'clsfInsert'");
        }
        return result;
    }

    // 중분류 코드 조회
    @Override
    public List<Map> clsfSelect(String jsonData) {
        log.info("호출 : CodeServiceImpl.clsfSelect ");
        log.info("re " + jsonData);
        List<Map> resultList = new ArrayList<>();
        try {
            resultList = codeMapper.clsfSelect(jsonData);
        } catch (Exception e) {
            resultList = null;
            log.error("error ", e.toString());
            throw new UnsupportedOperationException("Unimplemented method 'clsfSelect'");
        }
        return resultList;
    }
}
