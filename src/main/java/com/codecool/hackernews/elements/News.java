package com.codecool.hackernews.elements;

public class News {
    private String id;
    private String title;
    private String points;
    private String user;
    private String time;
    private String timeAgo;
    private String commentsCount;
    private String type;
    private String url;
    private String domain;

    public News(String id, String title, String points, String user, String time, String timeAgo, String commentsCount, String type, String url, String domain) {
        this.id = id;
        this.title = title;
        this.points = points;
        this.user = user;
        this.time = time;
        this.timeAgo = timeAgo;
        this.commentsCount = commentsCount;
        this.type = type;
        this.url = url;
        this.domain = domain;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPoints(String points) {
        this.points = points;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setTimeAgo(String timeAgo) {
        this.timeAgo = timeAgo;
    }

    public void setCommentsCount(String commentsCount) {
        this.commentsCount = commentsCount;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setDomain(String domain) {
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
        return timeAgo;
    }

    public String getCommentsCount() {
        return commentsCount;
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
