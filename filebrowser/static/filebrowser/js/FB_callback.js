function FileSubmit(FilePath, FileURL, ThumbURL, FileType) {
    window.opener.fb_callback(window.opener, FilePath, FileURL, ThumbURL, FileType);
    this.close();
}

