package com.codecool.hackernews.datahandler;

import com.codecool.hackernews.elements.News;
import com.google.gson.Gson;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class DataHandler {
    private final String url;

    public DataHandler(String url) {
        this.url = url;
    }

    public News[] getNews() throws IOException {
        Gson gson = new Gson();

        return gson.fromJson(String.valueOf(getData()), News[].class);
    }

    private StringBuffer getData() throws IOException {
        URL url = new URL(this.url);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");

        int responseCode = con.getResponseCode();
        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer content = new StringBuffer();
        while ((inputLine = in.readLine()) != null) {
            content.append(inputLine);
        }
        in.close();
        con.disconnect();

        return content;
    }
}
