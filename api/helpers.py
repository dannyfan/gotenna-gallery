"""Helper functions."""


def allow_append(url, width, height):
    """Check dimensions of url to see if it matches the width and/or height provided.

    Parameters
    ----------
    url : str
        The url being checked.
    width : int, NoneType
        The width value to check if it is the url's image width, default is None.
        If None, then width is not check and allows any value.
    height : int, NoneType
        The width value to check if it is the url's image height, default is None.
        If None, then height is not check and allows any value.

    Returns
    -------
    bool
        Allows the url to be append to the list or not.
    """
    if width is None and height is None:
        return True

    url_width = int(url.split('/')[-2])
    url_height = int(url.split('/')[-1])

    if width and height:
        return width == url_width and height == url_height

    return width == url_width or height == url_height
