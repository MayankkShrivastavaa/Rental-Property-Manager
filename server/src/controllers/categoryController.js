const deleteCategory = async (req, res) => {
  try {
    let categoryId = req.params.id;

    if (!isValidObjectId(categoryId)) {
      return res.status(400).json({ msg: "Invalid ID" });
    }

    let deleteCategory = await CategoryModel.findById(categoryId);
    if (!deleteCategory) {
      return res
        .status(404)
        .json({ msg: "Category not exists or already deleted" });
    }

    await CategoryModel.findByIdAndDelete(categoryId);
    return res.status(200).json({ msg: "Category deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};