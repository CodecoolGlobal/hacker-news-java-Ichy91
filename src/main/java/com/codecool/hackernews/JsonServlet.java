package com.codecool.hackernews;

import com.codecool.hackernews.datahandler.DataHandler;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "JsonServlet", urlPatterns = "/json", loadOnStartup = 2)
public class JsonServlet extends HttpServlet {
    DataHandler dataHandler;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        String topic = request.getParameter("topic");
        String page = request.getParameter("page");

        dataHandler = new DataHandler("https://api.hnpwa.com/v0/" + topic + "/" + page +".json");

        PrintWriter out = response.getWriter();

        out.println(dataHandler.getData());
    }
}
