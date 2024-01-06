package com.springboot.spring.service.com;

import java.util.List;
import java.util.Map;

public interface CodeService {
    
    // 대분류 코드 등록
    public String  sectionInsert(String jsonData);
    
    // 대분류 코드 수정
    public String  sectionUpdate(String jsonData);
    
    // 대분류 코드 조회
    public List<Map>  sectionSelect(Map map);
}
