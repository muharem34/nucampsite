#nucampsite



<!-- Reserve campsite modal paste modal code here-->
    <div id="reserveModal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="card-header bg-info text-white">Reserve a Campsite</h3>
                    <!-- This button code represent the "x" to close the modal -->
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <div class="modal-body">
                    <div class="container-fluid">
                        <form id="reserveForm">
                            <div class="form-group row">
                                <label for="numCampers" class="col-sm-6 col-form-label">Number of Campers</label>
                                <!-- Select Dropdown -->
                                <div class="col">
                                    <select name="numCampers" id="numCampers" class="form-control">
                                        <option selected>Select...</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>
                            </div>
                            <!-- Date -->
                            <div class="form-group row">
                                <label for="date" class="col-sm-6 col-form-label">Date</label>
                                <div class="col">
                                    <input type="date" class="form-control" id="date" name="date" placeholder="Date" />
                                </div>
                            </div>
                            



                            <!-- Search Button -->
                            <div class="form-group row">
                                <div class="col">
                                    <button type="button" class="btn btn-secondary" data-dismiss="">Cancel</button>

                                    <button type="submit" class="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


