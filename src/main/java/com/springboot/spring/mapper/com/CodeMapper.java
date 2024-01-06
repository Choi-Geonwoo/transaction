package com.springboot.spring.mapper.com;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CodeMapper {

    // 대분류 코드 등록
    public int  sectionInsert(Map map);
    
    // 대분류 코드 수정
    public int  sectionUpdate(Map map);
    
    // 대분류 코드 조회
    public List<Map>  sectionSelect();
}
