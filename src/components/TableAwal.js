import React from 'react';

class TableAwal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="body">
                <h1 id='title'>{this.props.judul}</h1>
                <table id='fruits'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama Buah</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>

                <div style={styles.container}>
                    ID: <input type="text" name="id"></input>
                    <span>&nbsp;</span> <span>&nbsp;</span>
                    Nama Buah: <input type="text" name="name"></input>
                    <span>&nbsp;</span>
                    <button>Tambah</button>
                </div>

                <div style={styles.container}>
                    Baru Saja ditambahkan:
                    <br></br>ID: <span></span>
                    <br></br>Nama Buah: <span></span>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        border: '1px solid black',
        padding: '10px',
        marginTop: '20px'
    }
};

export default TableAwal;