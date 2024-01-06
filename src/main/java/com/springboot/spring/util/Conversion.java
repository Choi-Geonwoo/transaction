package com.springboot.spring.util;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Conversion {
    
    public static Map<Object, Object> stringToMap(String jsondata) throws Exception{
        ObjectMapper mapper = new ObjectMapper();
        Map map = new HashMap<>();
        map = mapper.readValue(jsondata, new TypeReference<HashMap<Object, Object>>() {});
        return map;
    }
}
