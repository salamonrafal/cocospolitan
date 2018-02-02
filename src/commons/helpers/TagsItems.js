class TagsItems {

    constructor () {
        this.tags = [];
        this.tagsListUnique = {};
    }

    getAll () {
        return this.tags;
    }

    getTag(tagname) {
        if (this.tagsListUnique[tagname] !== undefined) {
            return this.tagsListUnique[tagname];
        } else {
            return [];
        }
        
    }

    appendTags (tags, headlineId) {
        for (let i = 0; i < tags.length; i++) {
            if (this._isTagExists(tags[i])) {
                this._appendTagExists(tags[i], headlineId);
            } else {
                this._appendTagNotExists(tags[i], headlineId);
            }
        }
        
    }

    _appendTagExists(tagname, headlineId) {
        let tagIndex = this._findTagIndex(tagname)
        this.tags[tagIndex].headlineIds.push(headlineId);

        this._addToTagListUnique(tagname, headlineId);
    }

    _appendTagNotExists(tagname, headlineId) {
        let tagItem = {
            tagname: tagname,
            headlineIds: [headlineId]
        }

        this.tags.push(tagItem);

        this._createTagListUnique(tagname);
        this._addToTagListUnique(tagname, headlineId);
    }

    _isTagExists (tagname) {
        if (this.tagsListUnique[tagname] !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    _findTagIndex (tagname) {
        for (let i = 0; i < this.tags.length; i++) {
            if (this.tags[i].tagname === tagname) {
                return i;
            }
        }
    }

    _createTagListUnique (tagname) {
        this.tagsListUnique[tagname] = [];
    }

    _addToTagListUnique (tagname, headlinesId) {
        this.tagsListUnique[tagname].push(headlinesId);
    }
}

export default TagsItems;