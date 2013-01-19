function FileSubmit(FilePath, FileURL, ThumbURL, FileType) {
    window.callback(window.opener, FilePath, FileURL, ThumbURL, FileType);
    this.close();
}

