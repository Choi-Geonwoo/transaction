package com.springboot.spring.mapper.com;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CodeMapper {

    // ��з� �ڵ� ���
    public int  sectionInsert(Map map);
    
    // ��з� �ڵ� ����
    public int  sectionUpdate(Map map);
    
    // ��з� �ڵ� ��ȸ
    public List<Map>  sectionSelect();
}
