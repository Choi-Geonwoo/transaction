package com.springboot.spring;

import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.springboot.spring.mapper.com.CodeMapper;
import com.springboot.spring.service.com.CodeService;

@SpringBootTest
class ApplicationTests {

    @Autowired
    private CodeMapper codeMapper;

	@Test
	@DisplayName("전체 조회")
	void contextLoads() {
		System.out.println("결과");
		//List<Map> list = codeMapper.sectionSelect(null);
	}

}
