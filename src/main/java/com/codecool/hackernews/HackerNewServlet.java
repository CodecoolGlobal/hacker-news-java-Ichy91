package com.codecool.hackernews;

import com.codecool.hackernews.datahandler.DataHandler;
import com.codecool.hackernews.elements.News;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

@WebServlet(name = "hackerNewsServlet", urlPatterns = {"/"}, loadOnStartup = 1)
public class HackerNewServlet extends javax.servlet.http.HttpServlet {
    DataHandler dataHandler;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String title = "Michael Hackson news";

        dataHandler = new DataHandler("https://api.hnpwa.com/v0/news/1.json");
        News[] news = dataHandler.getNews();


        out.println(
                "<html>\n" +
                        "<head>" +
                        "  <title>" + title + "</title>" +
                        "  <link rel=\"stylesheet\" type=\"text/css\" href='/static/css/site.css' />\n" +
                        "  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We\" crossorigin=\"anonymous\">" +
                        "  <script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js\" integrity=\"sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp\" crossorigin=\"anonymous\"></script>\n" +
                        "  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js\" integrity=\"sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/\" crossorigin=\"anonymous\"></script>" +
                        "  <script src='/static/js/dom.js' defer></script>" +
                        "  <script src='/static/js/dataHandler.js' defer></script>" +
                        "</head>\n" +

                        "<body>\n" +

                        navbar() +

                        "<div id=\"map\">" +

                        newsToHtml(news) +

                        "</div>" +

                        "</body></html>"
        );
    }

    private String navbar() {
        return "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n" +
                "  <div class=\"container-fluid\">\n" +
                "    <a class=\"navbar-brand\" href=\"/\">Hackson news</a>\n" +
                "    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
                "      <span class=\"navbar-toggler-icon\"></span>\n" +
                "    </button>\n" +
                "    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n" +
                "      <ul class=\"navbar-nav\">\n" +
                "        <li class=\"nav-item\" id=\"top-news\">\n" +
                "          <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Top news</a>\n" +
                "        </li>\n" +
                "        <li class=\"nav-item\" id=\"newest\">\n" +
                "          <a class=\"nav-link\" href=\"#\">Newest</a>\n" +
                "        </li>\n" +
                "        <li class=\"nav-item\" id=\"jobs\">\n" +
                "          <a class=\"nav-link\" href=\"#\">Jobs</a>\n" +
                "      </ul>\n" +
                "    </div>\n" +
                "  </div>\n" +
                "</nav>";
    }

    private String newsToHtml(News[] news) {
        StringBuilder newsHtml = new StringBuilder();

        for (News newsElement: news) {
            newsHtml.append("<div class=\"folder\">");
            newsHtml.append("<p>").append(newsElement.getTitle()).append("</p>");
            newsHtml.append("<p>").append(newsElement.getTimeAgo()).append("</p>");
            newsHtml.append("<p>").append(newsElement.getUrl()).append("</p>");
            newsHtml.append("</div>");
        }

        return newsHtml.toString();
    }
}
