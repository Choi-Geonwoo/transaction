package com.springboot.spring.service.com;

import java.util.List;
import java.util.Map;

public interface CodeService {
    
    // ��з� �ڵ� ���
    public String  sectionInsert(String jsonData);
    
    // ��з� �ڵ� ����
    public String  sectionUpdate(String jsonData);
    
    // ��з� �ڵ� ��ȸ
    public List<Map>  sectionSelect(Map map);
    
    // �ߺз� �ڵ� ���
    public String  clsfInsert(String jsonData);

    
    // ��з� �ڵ� ��ȸ
    public List<Map>  clsfSelect(String jsonData);
    
}
