package com.codecool.hackernews.elements;

public class News {
    private String id;
    private String title;
    private String points;
    private String user;
    private String time;
    private String time_ago;
    private String comments_count;
    private String type;
    private String url;
    private String domain;

    public News(String id, String title, String points, String user, String time, String time_ago, String comments_count, String type, String url, String domain) {
        this.id = id;
        this.title = title;
        this.points = points;
        this.user = user;
        this.time = time;
        this.time_ago = time_ago;
        this.comments_count = comments_count;
        this.type = type;
        this.url = url;
        this.domain = domain;
    }


    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getPoints() {
        return points;
    }

    public String getUser() {
        return user;
    }

    public String getTime() {
        return time;
    }

    public String getTimeAgo() {
        return time_ago;
    }

    public String getCommentsCount() {
        return comments_count;
    }

    public String getType() {
        return type;
    }

    public String getUrl() {
        return url;
    }

    public String getDomain() {
        return domain;
    }
}
