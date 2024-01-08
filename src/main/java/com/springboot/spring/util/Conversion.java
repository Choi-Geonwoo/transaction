package com.springboot.spring.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Conversion {
    
    public static Map<Object, Object> stringToMap(String jsondata) throws Exception{
        ObjectMapper mapper = new ObjectMapper();
        Map map = new HashMap<>();
        map = mapper.readValue(jsondata, new TypeReference<HashMap<Object, Object>>() {});
        //System.out.println("°á°ú : " + map.toString());
        return map;
    }

    public static List<Map<Object, Object>> mapList(String json) throws Exception{
        // Jackson ObjectMapper ??
        ObjectMapper objectMapper = new ObjectMapper();
        // JSON ???? List<Map>?? ??
        List<Map<Object, Object>> mapList = objectMapper.readValue(json, List.class);

        return mapList;
    }
}
